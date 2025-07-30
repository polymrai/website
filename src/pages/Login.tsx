import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { toast } = useToast();
  const { signup, login, user, userData, loading } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

      const result = await login(formData.email, formData.password);
      
      if (!result.success) {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Login Successful",
        description: `Welcome back, ${userData?.fullName}!`,
      });
      
      navigate('/');
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

      const result = await signup(formData.email, formData.password, {
        fullName: formData.fullName,
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
        email: formData.email,
        erpConnections: [],
        savedMrpRuns: []
      });

      if (!result.success) {
        toast({
          title: "Account Creation Failed",
          description: "An account with this email might already exist.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Account Created Successfully",
        description: "Welcome to polymr.ai! Your account has been created and you are now logged in.",
      });
      
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (user && userData) {
    const firstName = userData.fullName.split(' ')[0];

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
                      {userData.erpConnections.length > 0 ? (
                        <div className="space-y-2">
                          {userData.erpConnections.map((connection, index) => (
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
                          // Handle ERP connection
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
                      {userData.savedMrpRuns.length > 0 ? (
                        <div className="space-y-2">
                          {userData.savedMrpRuns.map((run, index) => (
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
                          // Handle MRP run
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
                        <p><strong>Name:</strong> {userData.fullName}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Company:</strong> {userData.companyName}</p>
                        <p><strong>Job Title:</strong> {userData.jobTitle}</p>
                        <p><strong>Last Login:</strong> {new Date(userData.lastLogin).toLocaleString()}</p>
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
                    onClick={() => {
                      // Handle logout
                    }}
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
