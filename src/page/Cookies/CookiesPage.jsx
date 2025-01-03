import { useEffect } from 'react';

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-8">
      <div className="w-[85%]  sm:w-[356px] md:w-[650px]  lg:w-[896px]  text-cardsText m-auto">
        <h3 className="font-semibold  text-[24px] sm:text-[32px] lg:text-[64px] text-white">
          COOKIES POLICY{' '}
        </h3>
        <p className="text-[16px] mt-8">Date of Revision: [ 02/10/2024 ]</p>
        <p className="text-[16px] mt-8">
          This Cookies Policy is designed to help visitors and users understand
          how and why we use cookies on our website worldtools.ai (the
          “Website”). “We” and “Us” in this document refers to Ineffaceable
          Enterprises, a company registered under the laws of the Delaware,
          having its office at
          <span data-nosnippet>
            3960 Howard Hughes Parkway, Suite 500, Las Vegas, Nevada, 89169
          </span>
          .
        </p>

        <ul className="flex flex-col mt-8 gap-8">
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px] ">
              1. What are Cookies
            </h5>
            <p className="text-[16px] mt-4">
              Cookies are small text files that are stored on your computer or
              mobile device when you visit a website. They help websites
              recognize your device and remember information about your visit,
              preferences, and actions.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              2. Types of Cookies We Use{' '}
            </h5>
            <ul className="list-disc list-outside	pl-5 mt-4	flex flex-col gap-2">
              <li>
                <p className="text-[18px] "> Essential Cookies</p>
                <p className="text-[16px] mt-1">
                  These cookies are necessary for the proper functioning of our
                  website. They enable you to navigate our site and use its
                  features, such as accessing secure areas. Without these
                  cookies, certain services you have requested cannot be
                  provided.
                </p>
              </li>
              <li>
                <p className="text-[16px] font-medium">
                  Analytical/Performance Cookies
                </p>
                <p className="text-[16px] mt-1">
                  website and to monitor its performance. For example, we may
                  use Google Analytics to collect information about your online
                  activity and interactions with our site.
                </p>
              </li>
              <li>
                <p className="text-[16px] font-medium">Functionality Cookies</p>
                <p className="text-[16px] mt-1">
                  These cookies allow us to remember choices you make on our
                  website (such as your username, language, or region) and
                  provide enhanced, more personalized features.
                </p>
              </li>
              <li>
                <p className="text-[16px] font-medium">Targeting Cookies</p>
                <p className="text-[16px] mt-1">
                  We may use these cookies to deliver content that is more
                  relevant to your interests. They may be used by third-party
                  companies to build a profile of your interests and show you
                  relevant advertisements on other sites.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              3. Your Consent{' '}
            </h5>
            <p className="text-[16px] mt-1">
              By using our Website, you consent to the placement of cookies on
              your device. You can manage your cookie preferences through your
              browser settings. However, please note that disabling certain
              cookies may affect the functionality of our Website.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              4. How to Manage Cookies{' '}
            </h5>
            <p className="text-[16px] mt-1">
              Most web browsers allow you to control cookies through their
              settings. To find out more about cookies, including how to see
              what cookies have been set, visit www.allaboutcookies.org.
            </p>
          </li>
          <li className="text-[16px] mt-4">
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              5. Changes to This Policy{' '}
            </h5>
            <p className="text-[16px] mt-1">
              We may update our Cookies Policy to reflect changes in our
              practices or for other operational, legal, or regulatory reasons.
              Any changes will be effective immediately upon posting the updated
              policy on our website.
            </p>
          </li>
          <li>
            <h5 className="font-semibold text-white text-[24px] lg:text-[32px]">
              6. Contact Information
            </h5>
            <p className="text-[16px] mt-4">
              If you have any questions or require further clarification
              regarding our Cookies Policy, please contact us at: &nbsp;
              <a href="mailto:support@worldtools.ai" className="text-[#0066FF]">
                support@worldtools.ai
              </a>
              &nbsp; or directly report in the Website in the “Contact” section.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cookies;
