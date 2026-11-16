import Hero from 'components/Hero';
import AIList from 'components/list_ai/AIList';
import Support from 'components/support/Support';
import { useEffect, useState } from 'react';

function MainPage() {
  const [value, setValue] = useState('');
  const [searchAI, setSearchAI] = useState('');
  const [shouldScroll, setShouldScroll] = useState(false);

  const scrollToList = () => {
    requestAnimationFrame(() => {
      document.getElementById('ai-list')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  useEffect(() => {
    if (!shouldScroll) return;

    const element = document.getElementById('ai-list');

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setShouldScroll(false);
  }, [searchAI, shouldScroll]);
  const handleClick = category => {
    setValue(category);
    scrollToList();
  };

  const handleClickReset = () => {
    setValue('');
    scrollToList();
  };
  const handleSearch = e => {
    e.preventDefault();
    setSearchAI(e.target.search.value);
    setShouldScroll(true);
  };

  const clickReset = () => {
    setSearchAI('');
    setValue('');
    // scrollToList();
  };

  return (
    <>
      <Hero
        clickReset={clickReset}
        handleClickReset={handleClickReset}
        click={handleClick}
        handleSearch={handleSearch}
        activeCategory={value}
      />

      <div id="ai-list">
        <AIList value={value} searchValue={searchAI} />
      </div>

      <Support />
    </>
  );
}

export default MainPage;
