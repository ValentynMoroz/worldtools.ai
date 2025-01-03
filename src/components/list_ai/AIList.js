import { useEffect, useState } from 'react';
import AnalyticsBlock from './AnalyticsBlock';
import BlockWrapperr from './BlockWrapperr';
import EducationBlock from './EducationBlock';
import FinanceBlock from './FinanceBlock';
import MarketingBlock from './MarketingBlock';
import ProductivityBlock from './ProductivityBlock';
import TechBlock from './TechBlock';
import {
  analyticsAI,
  educationAI,
  financeAi,
  marketingAI,
  newArrAI,
  techAI,
} from 'arrsAI/arrsAi';

const AIList = ({ value, searchValue }) => {
  const [productivity, setProductivity] = useState(newArrAI);
  const [tech, setTech] = useState(techAI);
  const [finance, setFinance] = useState(financeAi);
  const [education, setEducation] = useState(educationAI);
  const [analytics, setAnalytics] = useState(analyticsAI);
  const [marketing, setMarketing] = useState(marketingAI);

  useEffect(() => {
    const newArr = newArrAI.filter(ai =>
      ai.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductivity([...newArr]);
    const newArrTech = techAI.filter(ai =>
      ai.toLowerCase().includes(searchValue.toLowerCase())
    );
    setTech([...newArrTech]);
    const newArrFinance = financeAi.filter(ai =>
      ai.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFinance([...newArrFinance]);

    const newArrEducation = educationAI.filter(ai =>
      ai.toLowerCase().includes(searchValue.toLowerCase())
    );
    setEducation([...newArrEducation]);
    const newArrAnalytics = analyticsAI.filter(ai =>
      ai.toLowerCase().includes(searchValue.toLowerCase())
    );
    setAnalytics([...newArrAnalytics]);
    const newArrMarketing = marketingAI.filter(ai =>
      ai.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMarketing([...newArrMarketing]);
  }, [searchValue]);

  return (
    <section className="z-[1]">
      <div className="container">
        <BlockWrapperr
          style={`${value === 'Productivity' || !value ? '' : 'hidden'} `}
          title={'Productivity'}
          text={'AI tools to streamline your work and boost efficiency'}
        >
          {productivity.length === 0 ? (
            <p className="text-[18px] mt-4">{`Not Found ai with name ${searchValue} in category Productivity`}</p>
          ) : (
            <ProductivityBlock arr={productivity} />
          )}
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Tech' || !value ? '' : 'hidden'} `}
          title={'Tech'}
          text={'Smart AI support for developers, from debugging to DevOps'}
        >
          {tech.length === 0 ? (
            <p className="text-[18px] mt-4">{`Not Found ai with name ${searchValue} in category Tech`}</p>
          ) : (
            <TechBlock arr={tech} />
          )}
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Finance' || !value ? '' : 'hidden'} `}
          title={'Finance'}
          text={'AI for clear, efficient financial management and planning'}
        >
          {finance.length === 0 ? (
            <p className="text-[18px] mt-4">{`Not Found ai with name ${searchValue} in category Finance`}</p>
          ) : (
            <FinanceBlock arr={finance} />
          )}
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Education' || !value ? '' : 'hidden'} `}
          title={'Education'}
          text={'AI-powered aids for effective, personalized learning'}
        >
          {education.length === 0 ? (
            <p className="text-[18px] mt-4">{`Not Found ai with name ${searchValue} in category Education`}</p>
          ) : (
            <EducationBlock arr={education} />
          )}
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Analytics' || !value ? '' : 'hidden'} `}
          title={'Analytics'}
          text={'Insights and trends from your data, simplified with AI'}
        >
          {analytics.length === 0 ? (
            <p className="text-[18px] mt-4">{`Not Found ai with name ${searchValue} in category Analytics`}</p>
          ) : (
            <AnalyticsBlock arr={analytics} />
          )}
        </BlockWrapperr>
        <BlockWrapperr
          style={`${value === 'Marketing' || !value ? '' : 'hidden'} `}
          title={'Marketing'}
          text={
            'AI tools to enhance ad creation, social media, and audience insights for better campaign results'
          }
        >
          {marketing.length === 0 ? (
            <p className="text-[18px] mt-4">{`Not Found ai with name ${searchValue} in category Marketing`}</p>
          ) : (
            <MarketingBlock arr={marketing} />
          )}
        </BlockWrapperr>
      </div>
    </section>
  );
};

export default AIList;
