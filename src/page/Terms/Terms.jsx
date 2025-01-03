import { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-8">
      <div className="w-[85%]  sm:w-[356px] md:w-[650px]  lg:w-[896px]  text-cardsText m-auto">
        <h3 className="font-semibold  text-[24px] sm:text-[32px] lg:text-[64px] text-white">
          Terms of Service
        </h3>
        <p className="text-[16px] mt-8">Date of Revision: [ 02/10/2024 ]</p>
        <p className="text-[16px] mt-8">
          These Terms and Conditions ("Terms") govern your use of the
          worldtools.ai website (the "Site"), operated by Ineffaceable
          Enterprises, address &nbsp;
          <span data-nosnippet>
            3960 Howard Hughes Parkway, Suite 500, Las Vegas, Nevada, 89169
          </span>
          . By using our Site, you agree to be bound by these Terms. If you do
          not agree, you may not use our Site.
        </p>

        <ul className="flex flex-col mt-8 gap-8">
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px] ">
              1. Acceptance of Terms
            </h5>
            <p className="text-[16px] mt-4">
              By creating an account or accessing and using our platform, you
              agree to comply with and be legally bound by these Terms and all
              applicable laws and regulations. If you do not agree to these
              Terms, you must not use our services.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              2. Eligibility
            </h5>
            <p className="text-[16px] mt-4">
              You must be at least 18 years old to use our services. By agreeing
              to these Terms, you represent and warrant that you meet this age
              requirement.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              3. Services Provided
            </h5>
            <p className="text-[16px] mt-4">
              Our platform provides access to various AI models designed for
              productivity enhancement in areas such as bookkeeping, Excel
              assistance, prompt generation, music creation, and more. We strive
              to maintain high standards of service but make no guarantees
              regarding the results or performance of these AI models.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              4. Account Registration
            </h5>
            <p className="text-[16px] mt-4">
              To use certain features, you may need to create an account. You
              agree to provide accurate, complete, and updated information for
              your account and maintain the security of your login credentials.
              You are responsible for all activities that occur under your
              account.
            </p>
          </li>
          <li className="text-[16px] mt-4">
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              5. Subscription and Billing
            </h5>
            <ul className="list-disc list-outside	pl-5 mt-4	flex flex-col gap-2">
              <li>
                Subscription Plans: We offer subscription plans that provide
                access to premium features and services. Each plan’s features,
                duration, and pricing are outlined on our platform.
              </li>
              <li>
                Billing Cycle: Your subscription will automatically renew at the
                end of the billing cycle unless canceled. You agree to be billed
                for the subscription until you cancel.
              </li>
              <li>
                Cancellation: You may cancel your subscription at any time
                through your account settings. Cancellations will take effect at
                the end of the current billing cycle.
              </li>
              <li>
                Refunds are not provided for partial months. Changes to
                Subscription Plans: We reserve the right to change our
                subscription plans or adjust pricing at any time, with prior
                notice provided to existing subscribers.
              </li>
            </ul>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              6. Payments
            </h5>
            <p className="text-[16px] mt-4">
              Payments are processed securely through [Payment Processor, e.g.,
              Stripe]. By making a purchase, you agree to the payment terms set
              forth by [Payment Processor]. You authorize us to charge your
              provided payment method for all fees incurred for your account.
              All sales are final and non-refundable, except as required by law
              or explicitly stated.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              7. User Conduct
            </h5>
            <div>
              <p className="text-[16px] mt-4">
                You agree to use our platform only for lawful purposes and in
                accordance with these Terms. You must not:
              </p>
              <ul className="list-disc list-outside	pl-5 mt-4	flex flex-col gap-2">
                <li>
                  Use the platform for any unauthorized, illegal, or malicious
                  activity;
                </li>
                <li>
                  Attempt to interfere with the platform’s functionality or
                  security;
                </li>
                <li>
                  Misuse our intellectual property or the intellectual property
                  of others;
                </li>
                <li>
                  Share or redistribute your account credentials or subscription
                  benefits with others.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              8. Intellectual Property
            </h5>
            <p className="text-[16px] mt-4">
              All content, software, and other materials on our platform,
              including but not limited to text, graphics, logos, images, and
              software, are the property of worldtools.ai or its licensors. You
              may not reproduce, distribute, modify, or create derivative works
              without our prior written consent.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              9. Disclaimer of Warranties
            </h5>
            <p className="text-[16px] mt-4">
              Our platform is provided on an “as-is” and “as-available” basis.
              We make no warranties, express or implied, regarding the
              functionality, reliability, or accuracy of our services. We do not
              guarantee that our services will be uninterrupted or error-free,
              and we are not responsible for any delays, interruptions, or data
              loss.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              10. Limitation of Liability
            </h5>
            <p className="text-[16px] mt-4">
              To the fullest extent permitted by law, INEFFACEABLE ENTERPRISES
              and its affiliates will not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your
              use of, or inability to use, the platform, even if we have been
              advised of the possibility of such damages.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              11. Indemnification
            </h5>
            <p className="text-[16px] mt-4">
              You agree to defend, indemnify, and hold harmless INEFFACEABLE
              ENTERPRISES and its affiliates from and against any claims,
              damages, obligations, losses, liabilities, costs, or expenses
              arising from your use of the platform, breach of these Terms, or
              violation of any law or third-party rights.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              12. Termination of Service
            </h5>
            <p className="text-[16px] mt-4">
              We reserve the right to suspend or terminate your access to the
              platform at any time and without prior notice if you violate these
              Terms or engage in any activities that may harm our reputation,
              operations, or users.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              13. Governing Law
            </h5>
            <p className="text-[16px] mt-4">
              These Terms are governed by and construed in accordance with the
              laws of United States, without regard to its conflict of laws
              principles. Any legal action arising out of these Terms shall be
              brought in the courts located in
              <span data-nosnippet>Las Vegas, Nevada</span>.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              14. Changes to Terms of Service
            </h5>
            <p className="text-[16px] mt-4">
              We may modify these Terms at any time. Changes will be effective
              immediately upon posting to our platform. Your continued use of
              our services constitutes your acceptance of the revised Terms.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              15. Contact Us
            </h5>
            <p className="text-[16px] mt-4">
              If you have any questions about these Terms, please contact us at
              &nbsp;
              <a href="mailto:support@worldtools.ai" className="text-[#0066FF]">
                support@worldtools.ai
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Terms;
