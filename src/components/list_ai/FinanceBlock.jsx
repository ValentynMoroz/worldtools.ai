import { useState } from 'react';
import Card from './AICard';
import ModalAI from 'components/modals/ModalAI';
import BuyPremiumModal from 'components/modals/BuyPremiumModal';
import ScrollToHash from 'helpers/Scroll';
import { openModal } from './AnalyticsBlock';

const FinanceBlock = ({ arr }) => {
  const [openBuyPremium, setOpenBuyPremium] = useState(false);

  const [dataAI, setDataAI] = useState({});
  const [visible, setVisible] = useState(false);

  const handleClick = e => {
    const arr = [...e.target.children[1].children];
    const arr2 = [...e.target.children[2].children];
    const photo = arr[0].currentSrc;
    const name = arr[1].innerText;
    const text = arr[2].innerText;
    const view = arr2[1].innerText;
    setDataAI({
      name,
      photo,
      text,
      view,
    });
    setVisible(true);
    openModal();
  };
  return (
    <div className="relative" id="finance">
      <ScrollToHash offset={200} />

      <ul onClick={handleClick} className="flex flex-wrap gap-4 mt-4">
        <Card
          title={'Expense Tracker'}
          view={452}
          img={'./image/ExpenseTracker.png'}
          tag={'Finance'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Monitor expenses effortlessly. Expense Tracker categorizes
            transactions, helping you maintain a clear financial picture.
          </p>
        </Card>
        <Card
          title={'Investment Analyzer'}
          view={132}
          img={'./image/InvestmentAnalyzer.png'}
          tag={'Finance'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Make informed investment decisions with detailed insights.
            Investment Analyzer reviews performance and risk factors for smarter
            choices.
          </p>
        </Card>
        <Card
          title={'Tax Calculator'}
          view={564}
          img={'./image/TaxCalculator.png'}
          tag={'Finance'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Take the stress out of tax season. Tax Calculator helps estimate
            taxes, find deductions, and simplify filing."
          </p>
        </Card>
        <Card
          title={'Budget Planner'}
          view={73}
          img={'./image/BudgetPlanner.png'}
          tag={'Finance'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Plan and manage your budget effectively. Budget Planner categorizes
            spending and helps you stay on track financially.
          </p>
        </Card>
        <Card
          title={'Loan Calculator'}
          view={153}
          img={'./image/LoanCalculator.png'}
          tag={'Finance'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Get a clear view of loan terms. Loan Calculator provides accurate
            estimates for monthly payments and interest.
          </p>
        </Card>
        <Card
          title={'Credit Score Tracker'}
          view={642}
          img={'./image/CreditScoreTracker.png'}
          tag={'Finance'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Keep tabs on your credit health. Credit Score Tracker monitors
            changes and provides tips to improve your score.
          </p>
        </Card>
        <Card
          title={'Portfolio Rebalancer'}
          view={42}
          img={'./image/PortfolioRebalancer.png'}
          tag={'Finance'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Optimize your investment portfolio. Portfolio Rebalancer analyzes
            asset allocation and suggests adjustments for stability and growth.
          </p>
        </Card>
        <Card
          title={'Retirement Planner'}
          view={14}
          img={'./image/RetirementPlanner.png'}
          tag={'Finance'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Prepare for the future with confidence. Retirement Planner helps
            calculate savings goals and timelines for a secure retirement.
          </p>
        </Card>
      </ul>
      {visible && (
        <ModalAI
          data={dataAI}
          setVisible={setVisible}
          setOpenBuyPremium={setOpenBuyPremium}
        />
      )}
      {openBuyPremium && (
        <BuyPremiumModal setOpenBuyPremium={setOpenBuyPremium} />
      )}
    </div>
  );
};

export default FinanceBlock;
