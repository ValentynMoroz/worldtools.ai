import { useState } from 'react';
import Card from './AICard';
import ModalAI from 'components/modals/ModalAI';
import BuyPremiumModal from 'components/modals/BuyPremiumModal';
import ScrollToHash from 'helpers/Scroll';
import { openModal } from './AnalyticsBlock';

const TechBlock = ({ arr }) => {
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
    <div className="relative" id="tech">
      <ScrollToHash offset={200} />

      <ul onClick={handleClick} className="flex flex-wrap  gap-4 mt-4">
        <Card
          arr={arr}
          title={'Code Debugger'}
          view={314}
          img={'./image/CodeDebugger.png'}
          tag={'Tech'}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Quickly find and fix bugs with AI-powered code analysis. Code
            Debugger highlights errors and suggests fixes, so you can code with
            confidence.
          </p>
        </Card>
        <Card
          arr={arr}
          title={'API Integrator'}
          view={624}
          img={'./image/APIIntegrator.png'}
          tag={'Tech'}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Simplify API integration with guided AI support. API Integrator
            helps you connect services smoothly and troubleshoot common issues.
          </p>
        </Card>
        <Card
          arr={arr}
          title={'Code Optimizer'}
          view={8125}
          img={'./image/CodeOptimizer.png'}
          tag={'Tech'}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Enhance performance by refining your code. Code Optimizer suggests
            improvements, reducing load times and boosting efficiency.
          </p>
        </Card>
        <Card
          arr={arr}
          title={'Data Cleaner'}
          view={1924}
          img={'./image/DataCleaner.png'}
          tag={'Tech'}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Prepare data for analysis in minutes. Data Cleaner removes
            duplicates, fills gaps, and structures data to ensure accuracy.
          </p>
        </Card>
        <Card
          arr={arr}
          title={'Script Generator'}
          view={23}
          img={'./image/ScriptGenerator.png'}
          tag={'Tech'}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Automate tasks with custom scripts. Script Generator provides
            tailored code snippets for repetitive actions, saving time and
            effort.
          </p>
        </Card>
        <Card
          arr={arr}
          title={'DevOps Assistant'}
          view={172}
          img={'./image/DevOpsAssistant.png'}
          tag={'Tech'}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Manage your CI/CD pipelines with ease. DevOps Assistant streamlines
            deployment, monitoring, and automation.
          </p>
        </Card>
        <Card
          arr={arr}
          title={'Version Control Helper'}
          view={91}
          img={'./image/VersionControlHelper.png'}
          tag={'Tech'}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Stay on top of code changes effortlessly. Version Control Helper
            organizes commits, tracks updates, and ensures smooth collaboration.
          </p>
        </Card>
        <Card
          arr={arr}
          title={'System Health Monitor'}
          view={145}
          img={'./image/SystemHealthMonitor.png'}
          tag={'Tech'}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Keep your systems running optimally. System Health Monitor tracks
            metrics and alerts you to potential issues before they impact
            performance.
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

export default TechBlock;
