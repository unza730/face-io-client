import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const initFaceIO = async () => {
      try {
        const faceIO = new faceIO('fioa9b63');
        await faceIO.init();
        console.log('FaceIO initialized successfully');
      } catch (error) {
        console.error('Failed to initialize FaceIO:', error);
      }
    };
    initFaceIO();
  }, []);
  const handleRegister = async () => {
    try {
      const faceIO = new faceIO('fioa9b63');
      const enrollOptions = {
        locale: 'auto',
        payload: { email: 'user@example.com' }
      };
      const userInfo = await faceIO.enroll(enrollOptions);
      console.log('User registered successfully:', userInfo);
    } catch (error) {
      console.error('Failed to register user:', error);
    }
  };
  const handleLogin = async () => {
    try {
      const faceIO = new faceIO('fioa9b63');
      const userData = await faceIO.authenticate();
      console.log('User authenticated successfully:', userData);
    } catch (error) {
      console.error('Failed to authenticate user:', error);
    }
  };
  return (
    <div className="container">
      <h1 className="my-4">FaceIO Authentication</h1>
      <div className="d-grid gap-2 col-6 mx-auto my-4">
        <button className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
        <button className="btn btn-success" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};
export default App;