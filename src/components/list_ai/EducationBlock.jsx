import BuyPremiumModal from 'components/modals/BuyPremiumModal';
import Card from './AICard';
import { useState } from 'react';
import ModalAI from 'components/modals/ModalAI';
import ScrollToHash from 'helpers/Scroll';
import { openModal } from './AnalyticsBlock';

const EducationBlock = ({ arr }) => {
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
    <div className="relative" id="education">
      <ScrollToHash offset={200} />

      <ul onClick={handleClick} className="flex flex-wrap gap-4 mt-4">
        <Card
          title={'Language Tutor'}
          view={4313}
          img={'./image/LanguageTutor.png'}
          tag={'Education'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Learn new languages with personalized lessons. Language Tutor
            adjusts to your level, making language learning engaging and
            effective.
          </p>
        </Card>
        <Card
          title={'Math Solver'}
          view={541}
          img={'./image/MathSolver.png'}
          tag={'Education'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Solve equations and understand math concepts easily. Math Solver
            explains each step, so you learn as you go.
          </p>
        </Card>
        <Card
          title={'Study Organizer'}
          view={623}
          img={'./image/StudyOrganizer.png'}
          tag={'Education'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Keep track of assignments and exams. Study Organizer creates a
            personalized study schedule based on your goals.
          </p>
        </Card>
        <Card
          title={'Essay Assistant'}
          view={724}
          img={'./image/EssayAssistant.png'}
          tag={'Education'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Draft and improve your essays with AI guidance. Essay Assistant
            helps with structure, clarity, and grammar.
          </p>
        </Card>
        <Card
          title={'Flashcard Generator'}
          view={135}
          img={'./image/FlashcardGenerator.png'}
          tag={'Education'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Boost your memory with custom flashcards. Flashcard Generator helps
            you review key concepts effectively.
          </p>
        </Card>
        <Card
          title={'Quiz Creator'}
          view={6234}
          img={'./image/QuizCreator.png'}
          tag={'Education'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Create quizzes to test your knowledge. Quiz Creator generates
            questions and tracks progress to aid your studies.
          </p>
        </Card>
        <Card
          title={'Reading Comprehension'}
          view={154}
          img={'./image/ReadingComprehension.png'}
          tag={'Education'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Improve your understanding of complex texts. Comprehension Helper
            highlights key points and explains difficult concepts.
          </p>
        </Card>
        <Card
          title={'Science Lab Helper'}
          view={314}
          img={'./image/ScienceLabHelper.png'}
          tag={'Education'}
          arr={arr}
        >
          <p className="text-[14px] text-cardsText mt-2 pointer-events-none ">
            Conduct virtual experiments with ease. Lab Helper provides
            simulations and explanations for hands-on learning.
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

export default EducationBlock;
