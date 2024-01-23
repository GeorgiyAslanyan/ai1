import Image from "next/image";
import Link from "next/link";
import React from "react";

const Join = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-10 sm:mt-28 mb-5 sm:mb-10 max-w-[1290px] w-[96%] lg:w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="flex flex-col col-span-1 lg:col-span-3 gap-10">
          <h2 className="headerGradient leading-[110%] text-[24px] sm:text-[53px] md:text-[64px] bg-clip-text text-transparent text-center sm:text-start bg-gradient-to-b from-white to-[#AFAFAF]">
            Community-Driven Development
          </h2>
          <p className="text-[16px] text-[#ABABAB] sm:text-[24px] text-center sm:text-start">
            AI1 embraces a community-centric approach, where token holders can
            propose and vote on future developments, changes in tax structure,
            or other significant decisions, ensuring a democratic and
            participatory ecosystem.
          </p>
        </div>
        <div className="flex flex-row sm:flex-col justify-center sm:justify-start gap-10 col-span-1 lg:col-span-2">
          <div className="flex gap-6 items-center">
            <a
            href="https://t.me/ai1Labs" target="_blank" rel="noopener noreferrer"
              className="rounded-xl min-h-[70px] min-w-[70px] group border overflow-hidden bg-[#2f2f2f] border-gray-700 object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105"
              >
              <Image
                width={70}
                height={70}
                alt="tg"
                className="object-cover group-hover:opacity-80 transition-all ease-linear duratuion-100"
                src={"/tg.jpg"}
              />
            </a>
            <div className="hidden sm:flex flex-col justify-between">
              <p className="font-bold text-[24px]">Community Chat</p>
              <p className="text-[20px] flex text-gray-400">
                Ask general questions and chat with the community on Telegram.
              </p>
            </div>
          </div>
          <div className="flex gap-6  items-center">
            <a href="https://twitter.com/ai1Labs" target="_blank" rel="noopener noreferrer"
              className="rounded-xl group min-h-[70px] min-w-[70px]  border overflow-hidden bg-[#2f2f2f] border-gray-700 object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105"
              >
              <Image
                width={70}
                height={70}
                alt="tg"
                className="object-cover  group-hover:opacity-80 transition-all ease-linear duratuion-100"
                src={"/x.png"}
              />
            </a>
            <div className="hidden sm:flex flex-col justify-between">
              <p className="font-bold text-[24px]">Twitter</p>
              <p className="text-[20px] flex text-gray-400">
                Follow us to get the latest news and updates.
              </p>
            </div>
          </div>
          <div className="flex gap-6  items-center">
            <a href="https://medium.com/@ai1Labs" target="_blank" rel="noopener noreferrer"
              className="rounded-xl group min-h-[70px] min-w-[70px]  border overflow-hidden bg-[#2f2f2f] border-gray-700 object-cover transition-all ease-linear duratuion-100 scale-100 hover:scale-105"
              >
              <Image
                width={70}
                height={70}
                alt="tg"
                className="object-cover group-hover:opacity-80 transition-all ease-linear duratuion-100"
                src={"/medium.png"}
              />
            </a>
            <div className="hidden sm:flex flex-col justify-between">
              <p className="font-bold text-[24px]">Medium</p>
              <p className="text-[20px] flex text-gray-400">
                A place where we share our thoughts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-[#ABABAB] mt-0 md:mt-5 text-[12px] sm:text-[16px] text-justify sm:text-start">
        <p>
          Disclaimer: The information provided by AI1 on this website does not
          constitute investment advice, financial advice, trading advice, or any
          other sort of advice and you should not treat any of the
          website&apos;s content as such. AI1 does not recommend that any
          cryptocurrency should be bought, sold, or held by you. Do conduct your
          own due diligence and consult your financial advisor before making any
          investment decisions.
        </p>
        <p>
          The use of AI1 and its related tokens involves risks, including but
          not limited to trading risks, software and technology risks, and
          market volatility. Participation in the AI1 ecosystem or trading
          markets should be considered a high-risk activity. The information is
          provided &#34;as is&#34; without warranty of any kind, express or
          implied.
        </p>
        <p>
          Prices of cryptocurrencies are extremely volatile and may be affected
          by external factors such as financial, regulatory, or political
          events. Trading on margin increases the financial risks. Past
          performance of AI1&apos;s trading system or market behavior is not
          indicative of future results. By accessing and using the AI1 website
          and any related services, you acknowledge that you have read,
          understood, and agree to be bound by our terms and conditions. If you
          do not agree with the terms and conditions or the risk notice, please
          do not access or use our services. The AI1 team strives to keep the
          website updated, but we are not responsible for any inaccuracies or
          omissions that may appear. All intellectual property rights are
          reserved by the providers and/or the exchange providing the data
          contained in this website.
        </p>
      </div>
      <p className="text-[#ABABAB]">© 2023 | all-in-one</p>
    </div>
  );
};

export default Join;
