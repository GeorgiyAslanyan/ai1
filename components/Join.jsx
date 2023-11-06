import Image from "next/image";
import Link from "next/link";
import React from "react";

const Join = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center my-10 max-w-[1290px]">
      <h2 className="text-[24px]">Join our community to receive updates</h2>
      <div className="flex gap-8">
        <Link href={"#"}>
          <Image
            width={70}
            height={70}
            alt="tg"
            className="rounded-xl object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105 hover:shadow-[0px_26px_30px_0px_#63b3ed60] shadow-[0px_26px_30px_0px_#63b3ed40]"
            src={"/tg.jpg"}
          />
        </Link>
        <Link href={"#"}>
          <Image
            width={70}
            height={70}
            alt="tg"
            className="rounded-xl object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105 hover:shadow-[0px_26px_30px_0px_#EDF2F740] shadow-[0px_26px_30px_0px_#EDF2F720]"
            src={"/medium.png"}
          />
        </Link>
        <Link href={"#"}>
          <Image
            width={70}
            height={70}
            alt="tg"
            className="rounded-xl object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105 hover:shadow-[0px_26px_30px_0px_#EDF2F740] shadow-[0px_26px_30px_0px_#EDF2F720]"
            src={"/x.png"}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-5">
      <p>
        Disclaimer: The information provided by Ai1 on this website does not
        constitute investment advice, financial advice, trading advice, or any
        other sort of advice and you should not treat any of the website's
        content as such. Ai1 does not recommend that any cryptocurrency should
        be bought, sold, or held by you. Do conduct your own due diligence and
        consult your financial advisor before making any investment decisions.
      </p>
      <p>
          The use of Ai1 and its related tokens involves risks, including but
          not limited to trading risks, software and technology risks, and
          market volatility. Participation in the Ai1 ecosystem or trading
          markets should be considered a high-risk activity. The information is
          provided "as is" without warranty of any kind, express or implied.
        </p>
      <p>
        Prices of cryptocurrencies are extremely volatile and may be affected by
        external factors such as financial, regulatory, or political events.
        Trading on margin increases the financial risks. Past performance of
        Ai1's trading system or market behavior is not indicative of future
        results. By accessing and using the Ai1 website and any related
        services, you acknowledge that you have read, understood, and agree to
        be bound by our terms and conditions. If you do not agree with the terms
        and conditions or the risk notice, please do not access or use our
        services. The Ai1 team strives to keep the website updated, but we are
        not responsible for any inaccuracies or omissions that may appear. All
        intellectual property rights are reserved by the providers and/or the
        exchange providing the data contained in this website.
      </p>
      </div>
      <p>© 2023 All-in-One</p>
    </div>
  );
};

export default Join;
