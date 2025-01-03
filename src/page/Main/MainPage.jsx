import Hero from 'components/Hero';
import AIList from 'components/list_ai/AIList';
import Support from 'components/support/Support';
import { useState } from 'react';

function MainPage() {
  const [value, setValue] = useState('');
  const [searchAI, setSearchAI] = useState('');

  const scrollToElement = () => {
    const element = document.getElementById('productivity');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = 250;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      window.scrollTo({
        top: rect.top + scrollTop - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = e => {
    console.dir(e.target.innerText);
    setValue(e.target.innerText);
  };

  const handleSearch = e => {
    e.preventDefault();
    setSearchAI(e.target.search.value);
    scrollToElement();
  };

  return (
    <>
      <Hero click={handleClick} handleSearch={handleSearch} />
      <AIList value={value} searchValue={searchAI} />
      <Support />
    </>
  );
}

export default MainPage;
