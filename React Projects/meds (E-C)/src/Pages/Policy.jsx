import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";
import PolicySection from "./PolicySection";

export default function PrivacyPolicy() {
  const { isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;
  return (
    <>
      <div
        className="w-full px-4 md:px-10 lg:px-20 py-24"
        style={{
          background: themeStyle.bg,
          color: themeStyle.hex,
        }}
      >
        {/* Title */}
        <div className="max-w-4xl">
          <div className="text-4xl font-bold text-yellow-500">
            Privacy Policy
          </div>
        </div>

        <div className="my-20 border-b border-gray-800"></div>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl font-semibold">Section 1</h1>
            <div className="text-xl mt-2">PERSONAL INFORMATION WE COLLECT</div>
          </div>

          <div className="w-full md:w-2/3">
            <p className="leading-relaxed text-lg">
              We collect personal information when you use our Services, create
              an account with us or otherwise submit your personal information
              to us. Personal information may include any of the following:{" "}
              <br />
              - Name ( given name or surname) <br />
              - Date of birth Gender Mailing and/ or billing address <br />
              - Email address <br />
              - Phone number <br />
              - Purchase history <br />
              - Retail location visit history <br />- IP address, device
              identifiers and details of Site interactions <br />
              - Username and login details <br />
              - Site and notification preferences <br />
              - Payment information, such as card type, partial card number,
              expiration date, or CW code, or any other applicable payment
              information <br />- Survey responses and content of any messages
              you may send us <br />
              Personal information does not include: <br />
              - Publicly available information from government records. <br />
              - De-identified or aggregated consumer information. <br />
              <br />
              We obtain the categories of personal information listed above from
              the following categories of sources: <br />
              - Directly from you. For example, from forms you complete or
              products and services you purchase. <br />- Indirectly from you.
              For example, from observing your actions on our Website.
            </p>
          </div>
        </div>

        <div className="my-20 border-b border-gray-800"></div>

        {/* Section 2 */}
        <PolicySection
          title="Section 2"
          subtitle="USE OF PERSONAL INFORMATION"
          text={`
We may use or disclose the personal information we collect for one or more of the following purposes:
- To fulfill or meet the reason you provided the information. For example, if you share your name and contact information to ask a question about our products or services, we will use that personal information to respond to your inquiry. If you provide your personal information to purchase a product or service, we will use that information to process your payment and facilitate delivery. We may also save your information to facilitate new product orders or process returns.
- To create, maintain, customize, and secure your account with us.
- To process your requests, purchases, transactions, and payments.
- To provide you with support, respond to your inquiries, and address your concerns and monitor and improve our responses.
- To personalize your Website experience and to deliver content, product, and service offerings relevant to your interests, including targeted offers via email or text message (with your consent, where required by law).
- To help maintain the safety, security, and integrity of our Website, products and services, databases and other technology assets.
- For testing, research, analysis, and product development, including to develop and improve our Website, products, and services.
- To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.
- As described to you when collecting your personal information or as otherwise set forth in the CCPA.
- To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us about our Website users is among the assets transferred.

We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.
`}
        />

        <div className="my-20 border-b border-gray-800"></div>

        {/* Section 3 */}
        <PolicySection
          title="Section 3"
          subtitle="SHARING PERSONAL INFORMATION"
          text={`

We may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract. We share your personal information with the following categories of third parties:
- Service providers
- Affiliates
- Parent or subsidiary organizations

3.1. Disclosures of Personal Information for a Business Purpose
‍In the preceding 12 months, Company has disclosed the following categories of personal information for a business purpose:
- Category A: Identifiers
- Category B: California Customer Records personal information categories
- Category C: Protected classification characteristics under California or federal law
- Category D: Commercial information
- Category F: Internet or other similar network activity
- Category G: Geolocation data
- Category I: Professional or employment-related information
- Category K: Inferences drawn from other personal information

We disclose your personal information for a business purpose to the following categories of third parties:
- Service providers
- Affiliates
- Parent or subsidiary organizations
`}
        />

        <div className="my-20 border-b border-gray-800"></div>

        {/* Section 4 */}
        <PolicySection
          title="Section 4"
          subtitle="YOUR RIGHTS AND CHOICES"
          text={`
The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.

4.1. Access to Specific Information and Data Portability Rights
‍You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:
- The categories of personal information we collected about you
- The categories of sources for the personal information we collected about you
- Our business or commercial purpose for collecting that personal information
- The categories of third parties with whom we share that personal information
- The specific pieces of personal information we collected about you (also called a data portability request)
- If we disclosed your personal information for a business purpose, disclosures identifying the personal information categories that each category of recipient obtained.

4.2. Deletion Request Rights
‍You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.We may deny your deletion request if retaining the information is necessary for us or our service providers to:
- Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, or otherwise perform our contract with you.
- Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.
- Debug products to identify and repair errors that impair existing intended functionality.
- Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.
- Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).
- Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s achievement, if you previously provided informed consent.
- Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.
- Comply with a legal obligation.
- Make other internal and lawful uses of that information that are compatible with the context in which you provided it.

4.3. Exercising Access, Data Portability, and Deletion Rights
‍To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by either:
- Email us at support@muhameds.com
- https://www.muhameds.com/contact

Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child. To designate an authorized agent, you must provide a valid power of attorney under California’s Probate Code or other verifiable written documentation granting the agent permission to make the request.
You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:
- Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative, which may include:
- Using the [See Section 4.3 above]. You must provide at least two data points that we can match with the personal information we have collected about you.
- Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.

We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.
We will only use personal information provided in a verifiable consumer request to verify the requestor’s identity or authority to make the request.

4.4. Response Timing and Format
We endeavor to respond to a verifiable consumer request within 45 days of its receipt. If we require more time (up to an additional 45 days), we will inform you of the reason and extension period in writing.
Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request’s receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily usable and should allow you to transmit the information from one entity to another entity without hindrance.
We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.
`}
        />

        <div className="my-20 border-b border-gray-800"></div>

        {/* Section 5 */}
        <PolicySection
          title="Section 5"
          subtitle="NON-DISCRIMINATION"
          text={`

We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
- Deny you goods or services.
- Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.
- Provide you a different level or quality of goods or services.
- Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.
However, we may offer you certain financial incentives permitted by the CCPA that can result in different prices, rates, or quality levels. Any CCPA-permitted financial incentive we offer will reasonably relate to your personal information’s value and contain written terms that describe the program’s material aspects. Participation in a financial incentive program requires your prior opt in consent, which you may revoke at any time. 


`}
        />

        <div className="my-20 border-b border-gray-800"></div>

        {/* Section 6 */}
        <PolicySection
          title="Section 6"
          subtitle="OTHER CALIFORNIA PRIVACY RIGHTS"
          text={`

The Company does not generally engage third parties for direct marketing purposes.  However, we provide notice here of California’s “Shine the Light” Law (Civil Code Section § 1798.83) permits users of our Website that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email with the subject “Shine the Light Law Request” to [support@muhameds.com].
`}
        />

        <div className="my-20 border-b border-gray-800"></div>

        {/* Section 7 */}
        <PolicySection
          title="Section 7"
          subtitle="CHANGES TO OUR PRIVACY NOTICE"
          text={`

We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on the Website and update the notice’s effective date.
‍Your continued use of our Website following the posting of changes constitutes your acceptance of such changes.
`}
        />

        <div className="my-20 border-b border-gray-800"></div>

        {/* Section 9 */}
        <PolicySection
          title="Section 9"
          subtitle="Questions and contact information"
          text={`
If you have any questions or comments about this notice, the ways in which the Company collects and uses your information, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:
‍Email: support@muhameds.com
‍Website: www.muhameds.com
`}
        />

        <div className="my-40"></div>
      </div>
    </>
  );
}
