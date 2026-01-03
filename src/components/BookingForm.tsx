import { useState } from 'react';
import { X } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';

interface BookingFormProps {
  onSubmit: (data: { companyName: string; email: string; phone: string }) => void;
  onClose: () => void;
}

// Common personal email domains to check against
const personalEmailDomains = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'mail.com',
  'protonmail.com',
  'yandex.com',
  'zoho.com',
  'gmx.com',
  'live.com',
  'msn.com',
  'rediffmail.com',
  'inbox.com',
];

function isValidCompanyEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;

  return !personalEmailDomains.includes(domain);
}

export default function BookingForm({ onSubmit, onClose }: BookingFormProps) {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidCompanyEmail(email)) {
      newErrors.email =
        'Please use a company email address (not Gmail, Yahoo, etc.)';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const formData = new FormData();

    // Extract country code from phone number
    let countryCode = '';
    try {
      if (phone) {
        const phoneNumber = parsePhoneNumber(phone);
        if (phoneNumber) {
          countryCode = `+${phoneNumber.countryCallingCode}`;
        }
      }
    } catch (error) {
      console.error('Error parsing phone number:', error);
    }

    // ✅ YOUR REAL GOOGLE FORM ENTRY IDs
    formData.append('entry.552581938', companyName.trim()); // Company Name
    formData.append('entry.822776317', email.trim());       // Email
    formData.append('entry.2107039713', phone);             // Phone
    // TODO: Replace 'entry.XXXXXXXXX' with your actual Google Form entry ID for Country Code
    if (countryCode) {
      formData.append('entry.XXXXXXXXX', countryCode);      // Country Code (update this entry ID)
    }

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSfK4fESMYFw8SuO8DhRSe5MlFMM3zBoEl-KgAfPb_oj-FFyuA/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );

      // Optimistic success (Google does not return a response)
      onSubmit({
        companyName: companyName.trim(),
        email: email.trim(),
        phone,
      });
    } catch (error) {
      console.error('Google Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#0A1628] rounded-lg border border-gray-800 w-full max-w-md shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Form */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Book a Demo
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Please provide your details to schedule a meeting
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  if (errors.companyName)
                    setErrors({ ...errors, companyName: '' });
                }}
                className={`w-full px-4 py-3 bg-[#0F1F3A] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.companyName ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="Enter your company name"
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className={`w-full px-4 py-3 bg-[#0F1F3A] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="yourname@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contact Number <span className="text-red-400">*</span>
              </label>
              <div
                className={`phone-input-wrapper ${errors.phone ? 'error' : ''}`}
              >
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phone}
                  onChange={(value) => {
                    setPhone(value || '');
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30"
            >
              {isSubmitting ? 'Submitting...' : 'Continue to Calendar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
