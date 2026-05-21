import { useState } from 'react'
import './PortfolioItem.css'

function PortfolioItem({ item }) {
  const {
    projtype,
    title,
    subtitle,
    image,
    modalComponent: ModalContent,
  } = item
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="portfolio-item-card"
        onClick={() => setIsOpen(true)}
      >
        <div className="portfolio-item-image-wrapper">
          <img
            src={image}
            alt={title ?? 'Portfolio item image'}
            className="portfolio-item-image"
          />
          <div className="portfolio-item-overlay">
            <div className="portfolio-item-card-content">
              <span className="portfolio-item-badge">{projtype}</span>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </button>

      {isOpen ? (
        <div
          className="portfolio-modal-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
        >
          <div
            className="portfolio-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="portfolio-modal-image-wrapper">
              <img
                src={image}
                alt={title ?? 'Portfolio item header image'}
                className="portfolio-modal-image"
              />
            </div>
            <div className="portfolio-modal-header">
              <h2 id="portfolio-modal-title">{title}</h2>
              <button
                type="button"
                className="portfolio-modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close portfolio details"
              >
                ×
              </button>
            </div>
            <div className="portfolio-modal-body">
              {ModalContent ? <ModalContent /> : null}
            </div>
            <div className="portfolio-modal-footer">
              <button
                type="button"
                className="portfolio-modal-close-button"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default PortfolioItem
