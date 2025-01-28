export const loginUser = async (email, password) => {
  try {
    // Simulating API delay with a Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock user credentials
        const mockUser = {
          email: 'test@example.com',
          password: 'password123', 
        };

        // Validate credentials
        if (email === mockUser.email && password === mockUser.password) {
          resolve({
            success: true,
            token: 'mock-token-12345', // Simulate a JWT token
            user: {
              id: 1,
              name: 'John Doe',
              email: mockUser.email,
            },
          });
        } else {
          reject({
            success: false,
            message: 'Invalid email or password',
          });
        }
      }, 1000); // Simulate a 1-second delay
    });
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
