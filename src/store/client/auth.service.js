import auth from '@react-native-firebase/auth';

export const register = (email, password) => {

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}

export const login = (email, password) => {

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}

export const logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

const authService = {
  register,
  login,
  logout
}

export default authService
