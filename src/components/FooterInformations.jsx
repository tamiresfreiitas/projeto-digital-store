import { Link } from 'react-router-dom'
export default function FooterInformations({ title, informations }) {
  return (
    <div className="footer-info">
      <h4>{title}</h4>
      <ul>{informations.map(i => <li key={i.text}><Link to={i.link}>{i.text}</Link></li>)}</ul>
    </div>
  )
}
