import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface UserData {
  id: string;
  fullName: string;
  companyName: string;
  jobTitle: string;
  email: string;
  erpConnections: any[];
  savedMrpRuns: any[];
  lastLogin: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Fetch additional user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data() as UserData);
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string, userData: Omit<UserData, 'id' | 'lastLogin'>) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Create user document in Firestore
      const newUserData: UserData = {
        id: user.uid,
        ...userData,
        erpConnections: [],
        savedMrpRuns: [],
        lastLogin: new Date().toISOString()
      };
      
      await setDoc(doc(db, 'users', user.uid), newUserData);
      setUserData(newUserData);
      
      return { success: true, user };
    } catch (error) {
      return { success: false, error };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update last login time
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data() as UserData;
        await setDoc(doc(db, 'users', user.uid), {
          ...userData,
          lastLogin: new Date().toISOString()
        });
        setUserData(userData);
      }
      
      return { success: true, user };
    } catch (error) {
      return { success: false, error };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserData(null);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };

  const updateUserData = async (updates: Partial<UserData>) => {
    if (!user) return { success: false, error: 'No user logged in' };
    
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const currentData = userDoc.data() as UserData;
        const newData = { ...currentData, ...updates };
        await setDoc(doc(db, 'users', user.uid), newData);
        setUserData(newData);
        return { success: true };
      }
      return { success: false, error: 'User document not found' };
    } catch (error) {
      return { success: false, error };
    }
  };

  return {
    user,
    userData,
    loading,
    signup,
    login,
    logout,
    updateUserData
  };
}; 