interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const handleContactSubmit = async (formData: ContactFormData) => {
  // This is a mock implementation
  // In production, integrate with your backend service
  // Examples: EmailJS, Netlify Forms, Formspree, or custom API
  
  console.log('Contact form submitted:', formData);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return success response
  return {
    success: true,
    message: 'Thank you for your message! I will get back to you soon.'
  };
};

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form validation
export const validateForm = (formData: ContactFormData) => {
  const errors: Partial<ContactFormData> = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
