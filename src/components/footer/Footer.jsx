import { Link } from "react-router-dom"

export const Footer = () => {
 return (
    <footer className="py-4">
        <div className="container footer-row">
            <div className="footer-item">
                <Link to={`/`} className="site-brand">
                    Исторический<span>Томск</span>
                </Link>
                <p className="text">Томск - исторический город, который увлекает своих посетителей в путешествие через века.
                    С его богатой историей, Томск является настоящим сокровищем Сибири. Основанный в начале XVII века,
                    город быстро стал важным центром культуры, науки и торговли.</p>
            </div>

            <div className="footer-item">
                <h2>Достопримечательности:</h2>
                <ul>
                    <li><a href="#">Музей деревянного зодчества</a></li>
                    <li><a href="#">Музей истории Томска</a></li>
                    <li><a href="#">Успенская церковь</a></li>
                    <li><a href="#">Томский Кремль</a></li>
                </ul>
            </div>
        </div>
    </footer>
 )
}