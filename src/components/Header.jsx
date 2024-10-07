// 画像をそれぞれimportします。パスに注意してください。
import CoverImage from '../images/cover-image.png';
import Travel from '../images/icon_travel.png';
import Map from '../images/cover-map.png';
import America from '../images/America.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
        {/* overlayはカバー画像の上に透過して表示される背景要素です */}
        <div className="overlay"></div>
      {/* Travelロゴ */}
      <div className="main-travel" style={{backgroundImage: `url(${Travel})`}}></div>
      {/* Mapロゴ */}
      <div className="main-map" style={{backgroundImage: `url(${Map})`}}>
            <image className="country-link-germany">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://twitter.com/">
                    <FaMapMarkerAlt color="white" size="2rem" />
                </a>
            </image>
            <image className="country-link-america">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://twitter.com/">
                    <FaMapMarkerAlt color="white" size="2rem" />
                </a>
            </image>
        </div>         
      {/* カバー画像 */}
      <div className="country" style={{backgroundImage: `url(${America})`}}></div>
      <div className="container">
        
      </div>
    </header>
  );
};
