import { Link } from 'react-router-dom'

interface Sidebar {
  currentPage: string;
}

export default function Sidebar(props: Sidebar) {
  const {currentPage} = props

  return (
    <nav className="sidebar">
      <div className="sidebar__wrapper">
        <Link to="/admin" className="sidebar__logo">
          <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M29.9154 17.3001C29.9274 17.2167 29.9358 15.862 29.9404 4.47165L22.451 8.58028L13.3734 8.59532L5.85059 4.47148V17.1179L5.86233 18.052H17.7076L18.1926 18.0352V9.80679L22.6048 9.67861L29.1932 17.2951L28.8884 17.6654L29.7833 17.6344C29.8552 17.5362 29.9007 17.421 29.9154 17.3001ZM16.4829 9.68363V17.2951L6.59284 17.3001L13.1812 9.68363H16.4829Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.1926 30.6623L28.8884 17.6654L18.1926 18.0352V30.6623Z" fill="currentColor"/>
          </svg>
          <svg width="121" height="30" viewBox="0 0 159 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6 24.7467C3.86667 24.72 0.213333 22.32 0.4 16.5067H7.04C7.12 18.0267 8.4 18.96 11.6 18.9867C14.4267 19.0133 15.7333 18.2133 15.7333 17.1733C15.7333 16.4533 15.3333 15.7067 13.1467 15.3867L10.2667 14.9333C6.02667 14.24 0.933333 13.7333 0.933333 8C0.933333 3.57333 4.53333 0.853333 11.6533 0.853333C18.08 0.853333 22.56 2.64 22.4267 9.04H15.84C15.5733 7.54667 14.32 6.61333 11.4933 6.61333C9.04 6.61333 8.02667 7.36 8.02667 8.37333C8.02667 9.01333 8.42667 9.78667 10.1333 10.0533L12.5067 10.4533C16.96 11.2 23.0667 11.3333 23.0667 17.4667C23.0667 22.3467 19.28 24.7733 11.6 24.7467ZM40.5446 1.6H47.9313V24H40.5446V15.8933H31.8513V24H24.4646V1.6H31.8513V9.70667H40.5446V1.6ZM62.1017 24.7467C54.395 24.7467 49.4083 19.9733 49.4083 12.8C49.4083 5.62667 54.395 0.853333 62.1017 0.853333C69.8083 0.853333 74.795 5.62667 74.795 12.8C74.795 19.9733 69.8083 24.7467 62.1017 24.7467ZM62.1017 18.3733C65.035 18.3733 67.4617 16.3467 67.4617 12.8C67.4617 9.25333 65.035 7.22667 62.1017 7.22667C59.1683 7.22667 56.7417 9.25333 56.7417 12.8C56.7417 16.3467 59.1683 18.3733 62.1017 18.3733ZM76.2771 24V1.6H88.9971C95.1038 1.6 98.7304 4.32 98.7304 10.3467C98.7304 16.3733 95.1038 19.0933 89.0238 19.0933H83.6638V24H76.2771ZM83.6638 12.96H88.3571C90.1438 12.96 91.2904 12.08 91.2904 10.3467C91.2904 8.61333 90.1438 7.73333 88.3837 7.73333H83.6638V12.96ZM102.426 24.4267C100.426 24.4267 98.7458 22.7733 98.7458 20.8C98.7458 18.8267 100.426 17.1733 102.426 17.1733C104.426 17.1733 106.106 18.8267 106.106 20.8C106.106 22.7733 104.426 24.4267 102.426 24.4267ZM120.151 24.7467C112.605 24.7467 107.565 19.9733 107.565 12.8C107.565 5.62667 112.605 0.853333 120.151 0.853333C125.618 0.853333 131.218 3.25333 131.965 10.8267H124.925C124.311 8.37333 122.578 7.22667 120.151 7.22667C117.218 7.22667 114.898 9.41333 114.898 12.8C114.898 16.1867 117.218 18.3733 120.151 18.3733C122.578 18.3733 124.311 17.2267 124.925 14.72H131.965C131.218 22.3467 125.671 24.7467 120.151 24.7467ZM146.008 24.7467C138.301 24.7467 133.315 19.9733 133.315 12.8C133.315 5.62667 138.301 0.853333 146.008 0.853333C153.715 0.853333 158.701 5.62667 158.701 12.8C158.701 19.9733 153.715 24.7467 146.008 24.7467ZM146.008 18.3733C148.941 18.3733 151.368 16.3467 151.368 12.8C151.368 9.25333 148.941 7.22667 146.008 7.22667C143.075 7.22667 140.648 9.25333 140.648 12.8C140.648 16.3467 143.075 18.3733 146.008 18.3733Z" fill="currentColor"/>
          </svg>
        </Link>

        <ul className="sidebar__menus">
          <h3 className="sidebar__menus-title">Menu</h3>
          <Link to="/admin" className={`sidebar__menus-link ${currentPage === 'admin' ? 'sidebar__menus-link--active' : ''}`}>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.07954 3.08339L3.47668 6.67004C2.70811 7.26781 2.08472 8.54021 2.08472 9.50519V15.8331C2.08472 17.8143 3.69871 19.4368 5.6799 19.4368H15.5688C17.55 19.4368 19.164 17.8143 19.164 15.8416V9.62475C19.164 8.59145 18.4723 7.26781 17.6268 6.67858L12.3494 2.98092C11.1538 2.14403 9.23239 2.18673 8.07954 3.08339Z" stroke="currentColor" strokeWidth="1.53713" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.6244 16.0209V13.459" stroke="currentColor" strokeWidth="1.53713" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Overview</span>
          </Link>
          <Link to="/admin/product-list" className={`sidebar__menus-link ${currentPage === 'product-list' || currentPage === 'product' ? 'sidebar__menus-link--active' : ''}`}>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.164 7.91435V4.03736C19.164 2.83327 18.6174 2.34651 17.2596 2.34651H13.8096C12.4518 2.34651 11.9053 2.83327 11.9053 4.03736V7.90581C11.9053 9.11844 12.4518 9.59666 13.8096 9.59666H17.2596C18.6174 9.6052 19.164 9.11844 19.164 7.91435Z" stroke="currentColor" strokeWidth="1.02476" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.164 17.5214V14.0714C19.164 12.7136 18.6174 12.1671 17.2596 12.1671H13.8096C12.4518 12.1671 11.9053 12.7136 11.9053 14.0714V17.5214C11.9053 18.8792 12.4518 19.4258 13.8096 19.4258H17.2596C18.6174 19.4258 19.164 18.8792 19.164 17.5214Z" stroke="currentColor" strokeWidth="1.02476" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.3434 7.91435V4.03736C9.3434 2.83327 8.79687 2.34651 7.43906 2.34651H3.98905C2.63125 2.34651 2.08472 2.83327 2.08472 4.03736V7.90581C2.08472 9.11844 2.63125 9.59666 3.98905 9.59666H7.43906C8.79687 9.6052 9.3434 9.11844 9.3434 7.91435Z" stroke="currentColor" strokeWidth="1.02476" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.3434 17.5214V14.0714C9.3434 12.7136 8.79687 12.1671 7.43906 12.1671H3.98905C2.63125 12.1671 2.08472 12.7136 2.08472 14.0714V17.5214C2.08472 18.8792 2.63125 19.4258 3.98905 19.4258H7.43906C8.79687 19.4258 9.3434 18.8792 9.3434 17.5214Z" stroke="currentColor" strokeWidth="1.02476" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Products</span>
          </Link>
          <Link to="/admin/transaction-list" className={`sidebar__menus-link ${currentPage === 'transaction-list' || currentPage === 'transaction' ? 'sidebar__menus-link--active' : ''}`}>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08472 7.88193H19.164" stroke="currentColor" strokeWidth="1.02476" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.50061 14.7136H7.20854" stroke="currentColor" strokeWidth="1.02476" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.34338 14.7136H12.7592" stroke="currentColor" strokeWidth="1.02476" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.87631 3.61212H15.3638C18.4039 3.61212 19.164 4.36361 19.164 7.36102V14.3721C19.164 17.3695 18.4039 18.121 15.3724 18.121H5.87631C2.84474 18.1295 2.08472 17.378 2.08472 14.3806V7.36102C2.08472 4.36361 2.84474 3.61212 5.87631 3.61212Z" stroke="currentColor" strokeWidth="1.02476" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Transactions</span>
          </Link>
        </ul>
      </div>
    </nav>
  )
}