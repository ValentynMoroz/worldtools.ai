import { useState } from 'react';
import Card from './AICard';
import ModalAI from 'components/modals/ModalAI';
import BuyPremiumModal from 'components/modals/BuyPremiumModal';
import ScrollToHash from 'helpers/Scroll';
import { openModal } from './AnalyticsBlock';

const MarketingBlock = ({ arr }) => {
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
    <div id="marketing" className=" relative">
      <ScrollToHash offset={200} />

      <ul onClick={handleClick} className="flex flex-wrap  gap-4 mt-4">
        <Card
          title={'Ad Copy Generator'}
          view={1324}
          img={'./image/AdCopyGenerator.png'}
          tag={'Marketing'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Create persuasive ad copy that drives engagement. This AI generates
            catchy and effective text tailored to your audience
          </p>
        </Card>
        <Card
          title={'SEO Optimizer'}
          view={34}
          img={'./image/SEOOptimizer.png'}
          tag={'Marketing'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Boost your search rankings with optimized content suggestions. SEO
            Optimizer refines keywords and meta tags for better visibility.
          </p>
        </Card>
        <Card
          title={'Social Media Scheduler'}
          view={65}
          img={'./image/SocialMediaScheduler.png'}
          tag={'Marketing'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Plan and schedule posts across platforms effortlessly. Social Media
            Scheduler helps maintain consistency and engagement.
          </p>
        </Card>
        <Card
          title={'Feedback Analyzer'}
          view={452}
          img={'./image/FeedbackAnalyzer.png'}
          tag={'Marketing'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Understand customer sentiments instantly. Feedback Analyzer scans
            reviews and comments to reveal trends and areas for improvement.
          </p>
        </Card>
        <Card
          title={'Audience Targeter'}
          view={342}
          img={'./image/AudienceTargeter.png'}
          tag={'Marketing'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Identify and reach your ideal audience. Audience Targeter analyzes
            demographics to help you focus your marketing efforts effectively
          </p>
        </Card>
        <Card
          title={'Performance Tracker'}
          view={653}
          img={'./image/PerformanceTracker.png'}
          tag={'Marketing'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Monitor and evaluate campaign success in real-time. This AI tracks
            metrics and highlights actionable insights for optimization.
          </p>
        </Card>
        <Card
          title={'Email Campaign Optimizer'}
          view={245}
          img={'./image/EmailCampaignOptimizer.png'}
          tag={'Marketing'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Craft high-conversion emails effortlessly. Email Optimizer
            fine-tunes subject lines and body content for maximum impact."
          </p>
        </Card>
        <Card
          title={'Visual Content Creator'}
          view={754}
          img={'./image/VisualContentCreator.png'}
          tag={'Marketing'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Enhance your branding with on-point visuals. Visual Content Creator
            generates images, infographics, and layouts that resonate with your
            audience.
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

export default MarketingBlock;
