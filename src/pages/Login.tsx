
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  fullName: string;
  companyName: string;
  jobTitle: string;
  email: string;
  password: string;
  erpConnections: any[];
  savedMrpRuns: any[];
  lastLogin: string;
}

const Login = () => {
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  // Check if user is already logged in on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getAllUsers = (): User[] => {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
  };

  const saveUser = (user: User) => {
    const users = getAllUsers();
    const existingUserIndex = users.findIndex(u => u.email === user.email);
    
    if (existingUserIndex >= 0) {
      users[existingUserIndex] = user;
    } else {
      users.push(user);
    }
    
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  const sendNotificationEmail = async (user: User, isNewUser: boolean = false) => {
    const subject = isNewUser ? 'New User Registration - polymr.ai' : 'User Login - polymr.ai';
    const body = isNewUser ? 
      `New user registration details:

Name: ${user.fullName}
Company: ${user.companyName}
Job Title: ${user.jobTitle}
Email: ${user.email}
Registration Time: ${new Date().toLocaleString()}

Please follow up with the new user.` :
      `User login notification:

Name: ${user.fullName}
Email: ${user.email}
Login Time: ${new Date().toLocaleString()}`;

    try {
      // Send email using Formspree
      const response = await fetch('https://formspree.io/f/xdkozpne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.fullName,
          email: user.email,
          subject: subject,
          message: body,
          _replyto: user.email,
          _to: 'polymrai.business@gmail.com',
          _format: 'plain'
        }),
      });

      if (!response.ok) {
        console.error('Failed to send notification email');
      }
    } catch (error) {
      console.error('Error sending notification email:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Handle login
      if (!formData.email || !formData.password) {
        toast({
          title: "Missing Information",
          description: "Please enter your email and password.",
          variant: "destructive"
        });
        return;
      }

      const users = getAllUsers();
      const user = users.find(u => u.email === formData.email);
      
      if (!user) {
        toast({
          title: "Account Not Found",
          description: "No account found with that email address. Please create an account first.",
          variant: "destructive"
        });
        return;
      }

      if (user.password !== formData.password) {
        toast({
          title: "Invalid Password",
          description: "The password you entered is incorrect.",
          variant: "destructive"
        });
        return;
      }

      // Update last login time
      user.lastLogin = new Date().toISOString();
      saveUser(user);
      
      // Set current user in localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      if (formData.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      
      setCurrentUser(user);
      setIsLoggedIn(true);
      
      // Send login notification email automatically
      await sendNotificationEmail(user, false);
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.fullName}!`,
      });
    } else {
      // Handle account creation
      if (!formData.fullName || !formData.companyName || !formData.jobTitle || !formData.email || !formData.password) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "Passwords do not match.",
          variant: "destructive"
        });
        return;
      }

      // Check if user already exists
      const users = getAllUsers();
      if (users.find(u => u.email === formData.email)) {
        toast({
          title: "Account Already Exists",
          description: "An account with this email already exists. Please log in instead.",
          variant: "destructive"
        });
        return;
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        fullName: formData.fullName,
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
        email: formData.email,
        password: formData.password,
        erpConnections: [],
        savedMrpRuns: [],
        lastLogin: new Date().toISOString()
      };

      saveUser(newUser);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      setCurrentUser(newUser);
      setIsLoggedIn(true);
      
      // Send new user notification email automatically
      await sendNotificationEmail(newUser, true);
      
      toast({
        title: "Account Created Successfully",
        description: "Welcome to polymr.ai! Your account has been created and you are now logged in.",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('rememberMe');
    setIsLoggedIn(false);
    setCurrentUser(null);
    setFormData({
      fullName: '', companyName: '', jobTitle: '', 
      email: '', password: '', confirmPassword: '', rememberMe: false
    });
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const updateUserData = (updates: Partial<User>) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, ...updates };
      setCurrentUser(updatedUser);
      saveUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  if (isLoggedIn && currentUser) {
    const firstName = currentUser.fullName.split(' ')[0];

    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Dashboard
                </CardTitle>
                <p className="text-gray-600">Welcome back, {firstName}!</p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">My ERP Connections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {currentUser.erpConnections.length > 0 ? (
                        <div className="space-y-2">
                          {currentUser.erpConnections.map((connection, index) => (
                            <p key={index} className="text-sm text-gray-600">
                              {connection.type}: {connection.status}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">No connections yet—click here to start your first integration.</p>
                      )}
                      <Button 
                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={() => {
                          const newConnection = { type: 'NetSuite', status: 'Connected', date: new Date().toISOString() };
                          updateUserData({ erpConnections: [...currentUser.erpConnections, newConnection] });
                          toast({ title: "ERP Connected", description: "NetSuite integration added successfully!" });
                        }}
                      >
                        Connect ERP System
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Saved MRP Runs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {currentUser.savedMrpRuns.length > 0 ? (
                        <div className="space-y-2">
                          {currentUser.savedMrpRuns.map((run, index) => (
                            <p key={index} className="text-sm text-gray-600">
                              Run {index + 1}: {run.date} - {run.status}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">No runs yet—click here to start your first run.</p>
                      )}
                      <Button 
                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={() => {
                          const newRun = { date: new Date().toLocaleDateString(), status: 'Completed', results: 'Sample MRP Run' };
                          updateUserData({ savedMrpRuns: [...currentUser.savedMrpRuns, newRun] });
                          toast({ title: "MRP Run Started", description: "Your MRP run has been completed successfully!" });
                        }}
                      >
                        Start MRP Run
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><strong>Name:</strong> {currentUser.fullName}</p>
                        <p><strong>Email:</strong> {currentUser.email}</p>
                        <p><strong>Company:</strong> {currentUser.companyName}</p>
                        <p><strong>Job Title:</strong> {currentUser.jobTitle}</p>
                        <p><strong>Last Login:</strong> {new Date(currentUser.lastLogin).toLocaleString()}</p>
                      </div>
                      <Button variant="outline" className="mt-4">
                        Update Profile
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Billing & Subscription</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">No active subscription</p>
                      <Button variant="outline" className="mt-4">
                        Upgrade Plan
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Button 
                    variant="outline"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-900">
                {isLogin ? 'Login to polymr.ai' : 'Create Your Account'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <>
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required={!isLogin}
                      />
                    </div>

                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        required={!isLogin}
                      />
                    </div>

                    <div>
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        required={!isLogin}
                      />
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      required={!isLogin}
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange('rememberMe', checked)}
                    />
                    <Label htmlFor="rememberMe" className="text-sm">Remember me</Label>
                  </div>
                )}

                <Button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {isLogin ? 'Log In' : 'Create Account'}
                </Button>

                {isLogin && (
                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      Forgot password? Contact us at: polymrai.business@gmail.com
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm text-purple-600 hover:text-purple-700"
                  >
                    {isLogin ? "Don't have an account? Create account" : "Already have an account? Log in"}
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
