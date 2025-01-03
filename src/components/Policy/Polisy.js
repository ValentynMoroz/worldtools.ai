import { useEffect } from 'react';

const Polisy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-8">
      <div className="w-[85%]  sm:w-[356px] md:w-[650px]  lg:w-[896px]  text-cardsText m-auto">
        <h3 className="font-semibold  text-[24px] sm:text-[32px] lg:text-[64px] text-white">
          Privacy Policy{' '}
        </h3>
        <p className="text-[16px] mt-8">Last Updated: [Date]</p>
        <p className="text-[16px] mt-8">
          At INEFFACEABLE ENTERPRISES, we are committed to protecting your
          privacy. This Privacy Policy explains what information we collect, how
          we use it, and your rights regarding that information. By using our
          platform, you agree to this Privacy Policy.
        </p>
        <ul className="flex flex-col mt-8 gap-8">
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px] ">
              1. Information We Collect{' '}
            </h5>
            <ul className="list-disc list-outside	pl-5 mt-4	flex flex-col gap-2">
              <li>
                Personal Information: When you create an account, subscribe, or
                contact us, we may collect information such as your name, email
                address, payment information, and other contact details.
              </li>
              <li>
                Usage Data: We collect data on how you use our platform,
                including pages viewed, clicks, and interactions, to improve
                user experience.
              </li>
              <li>
                Device Information: We may gather information about the device
                you use to access our platform, such as IP address, browser
                type, and operating system.
              </li>
            </ul>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              2. How We Use Your Information{' '}
            </h5>
            <ul className="list-disc list-outside	pl-5 mt-4	flex flex-col gap-2">
              <li>
                To Provide Services: We use your information to operate,
                maintain, and improve our platform and provide services
                requested by you.
              </li>
              <li>
                To Communicate with You: We may use your contact information to
                send you updates, respond to inquiries, and inform you of
                changes or promotional offers.
              </li>
              <li>
                For Security and Legal Purposes: We use your information to
                detect and prevent fraud, secure our platform, and comply with
                legal obligations.
              </li>
            </ul>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              3. Data Sharing and Disclosure{' '}
            </h5>
            <p className="text-[16px] mt-4">
              We do not sell your personal information. We may share information
              with trusted third-party service providers (e.g., payment
              processors) who assist in delivering our services, under strict
              confidentiality agreements. We may also disclose information if
              required by law or to protect our rights.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              4. Cookies and Tracking{' '}
            </h5>
            <p className="text-[16px] mt-4">
              Our platform uses cookies and similar tracking technologies to
              enhance user experience, analyze traffic, and personalize content.
              You can manage your cookie preferences through your browser
              settings.
            </p>
          </li>
          <li className="text-[16px] mt-4">
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              5. Data Security{' '}
            </h5>
            <p className="text-[16px] mt-4">
              We implement reasonable security measures to protect your data
              from unauthorized access or disclosure. However, no online
              transmission is entirely secure, and we cannot guarantee absolute
              security.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              6. Your Rights{' '}
            </h5>
            <p className="text-[16px] mt-4">
              Depending on your jurisdiction, you may have the right to access,
              update, or delete your personal information, as well as the right
              to withdraw consent to data processing. To exercise these rights,
              please contact us at Payteam@worldtools.ai.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              7. Changes to This Privacy Policy{' '}
            </h5>

            <p className="text-[16px] mt-4">
              We may update this Privacy Policy periodically. Changes will be
              posted on this page, and significant changes will be communicated
              to you directly.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              8. Contact Us{' '}
            </h5>
            <p className="text-[16px] mt-4">
              If you have questions about our Privacy Policy or data practices,
              please reach out to us at Payteam@worldtools.ai.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Polisy;
