import { useState } from 'react';
import Card from './AICard';
import ModalAI from 'components/modals/ModalAI';
import BuyPremiumModal from 'components/modals/BuyPremiumModal';
import ScrollToHash from 'helpers/Scroll';

export function openModal() {
  let scrollPosition = window.scrollY;
  document.body.style.top = `-${scrollPosition}px`;
  document.body.classList.add('overflow-hidden-body');
}
const AnalyticsBlock = ({ arr }) => {
  const [openBuyPremium, setOpenBuyPremium] = useState(false);

  const [dataAI, setDataAI] = useState({});
  const [visible, setVisible] = useState(false);

  const handleClick = e => {
    console.dir(e.target);
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
    <div className="relative" id="analytics">
      <ScrollToHash offset={200} />

      <ul onClick={handleClick} className="flex flex-wrap gap-4 mt-4">
        <Card
          title={'Data Visualizer'}
          view={832}
          img={'./image/DataVisualizer.png'}
          tag={'Analytics'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Transform raw data into clear visuals. Data Visualizer creates
            charts and graphs to help you see trends and patterns.
          </p>
        </Card>
        <Card
          title={'Trend Forecaster'}
          view={65}
          img={'./image/TrendForecaster.png'}
          tag={'Analytics'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Predict future trends with AI analysis. Trend Forecaster uses
            historical data to provide actionable insights.
          </p>
        </Card>
        <Card
          title={'Customer Insights'}
          view={654}
          img={'./image/CustomerInsights.png'}
          tag={'Analytics'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Understand your audience with customer data analysis. This AI
            identifies behaviors, preferences, and trends.
          </p>
        </Card>
        <Card
          title={'Sales Tracker'}
          view={54}
          img={'./image/SalesTracker.png'}
          tag={'Analytics'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Monitor your sales performance over time. Sales Tracker analyzes
            patterns to help you optimize revenue.
          </p>
        </Card>
        <Card
          title={'Market Segmentation Tool'}
          view={32}
          img={'image/MarketSegmentationTool.png'}
          tag={'Analytics'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Segment your market based on data-driven insights. This tool
            clusters customers by demographics, behavior, and needs.
          </p>
        </Card>
        <Card
          title={'Conversion Rate Optimizer'}
          view={65}
          img={'./image/ConversionRateOptimizer.png'}
          tag={'Analytics'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Improve your conversion rates. This AI analyzes visitor behavior to
            suggest strategies for boosting engagement.
          </p>
        </Card>
        <Card
          title={'Social Media Analyzer'}
          view={23}
          img={'./image/SocialMediaAnalyzer.png'}
          tag={'Analytics'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Measure the impact of your social campaigns. Social Media Analyzer
            reviews engagement, growth, and trends.
          </p>
        </Card>
        <Card
          title={'Performance Dashboard'}
          view={65}
          img={'./image/PerformanceDashboard.png'}
          tag={'Analytics'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Access all key metrics in one place. Performance Dashboard
            consolidates analytics for real-time insights.
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

export default AnalyticsBlock;
