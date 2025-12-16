'use client';
import { useState, useEffect } from 'react';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';

export const CookiesBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsentValue('user_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="max-w-7xl mx-auto fixed bottom-0 left-1/2 -translate-x-1/2 z-50 animate-slideUp w-full">
      <CookieConsent
        location="bottom"
        cookieName="altair_cookie_consent"
        buttonText="Accept All"
        declineButtonText="Reject All"
        enableDeclineButton
        onAccept={() => setVisible(false)}
        onDecline={() => setVisible(false)}
        style={{
          background: '#f9fcff',
          color: 'black',
          padding: '1rem',
          boxShadow: '0 -4px 12px rgba(0,0,0,0.3)',
        }}
        buttonStyle={{
          backgroundColor: '#0f172b',
          color: 'white',
          fontSize: '14px',
          fontWeight: "500",
          borderRadius: '6px',
          padding: '8px 18px',
        }}
        declineButtonStyle={{
          backgroundColor: 'white',
          color: 'black',
          fontSize: '14px',
          fontWeight: "500",
          borderRadius: '6px',
          border: '1px solid black',
          padding: '8px 18px',
        }}
        expires={365}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-3">
          <div className='flex flex-col items-start justify-between gap-2'>
            <h3 className='text-base font-medium'>This website uses cookies</h3>
            <p className="text-sm text-black">
              We use cookies to improve your experience, analyze site traffic, and personalize content.
              By clicking “Accept All”, you agree to our use of cookies.
            </p>

          </div>
        </div>
      </CookieConsent>
    </div>
  );
}