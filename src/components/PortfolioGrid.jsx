import PortfolioItem from './PortfolioItem.jsx'
import { portfolioItems } from '../data/portfolioItems.js'

function PortfolioGrid() {
  return (
    <div className="portfolio-grid">
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default PortfolioGrid
