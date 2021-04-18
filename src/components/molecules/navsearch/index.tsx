import { FC, useState } from 'react';
import styles from './navsearch.module.css';

interface NavSearchProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetSearch: () => void;
  searchValue: string;
}

const NavSearch: FC<NavSearchProps> = ({ handleSearch, resetSearch, searchValue }) => {
  const [mobileSearch, setSearch] = useState<boolean>(false);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleMobileSearch = () => {
    setSearch(true);
  };

  const handleSearchNav = () => {
    setSearch(false);
    resetSearch();
  };
  return (
    <div className={styles.search}>
      <button className={styles.mobileSearch} onClick={handleMobileSearch} type="button">
        <img src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png" alt="search" />
      </button>
      <form
        action="#"
        method="get"
        className={mobileSearch ? `${styles.search_form} ${styles.active}` : `${styles.search_form}`}
      >
        <button className={styles.backButton} onClick={handleSearchNav} type="button">
          <img src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png" alt="back" />
        </button>
        <input
          type="search"
          placeholder="Search for Kid name"
          className={styles.search_keyword}
          value={searchValue}
          onChange={handleSearch}
        />
        <button className={styles.searchButton} type="submit" onClick={handleSubmit} aria-label="submit" />
      </form>
    </div>
  );
};

export default NavSearch;
