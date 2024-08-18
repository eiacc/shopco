import { Link } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import CollectionForm from "../../components/admin/Product/CollectionForm";

export default function CreateCollection() {
  return (
    <div className="admin">
      <div className="admin__wrapper">
        <Sidebar currentPage="collection" />

        <main className="collection">
          <Link className="backlink" to={`/admin/collection-list`}>
            <span className="backlink__icon">
              <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM33 7L1 7V9L33 9V7Z" fill="currentColor"/>
              </svg>
            </span>
            <span className="backlink__text">Go back</span>
          </Link>

          <CollectionForm form_submission_type="create" />
        </main>
      </div>
    </div>
  )
}