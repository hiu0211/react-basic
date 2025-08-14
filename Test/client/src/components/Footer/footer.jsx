import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© Bản quyền thuộc về Bộ Tài Chính</p>
        <p>Số 28 Trần Hưng Đạo - Quận Hoàn Kiếm - Hà Nội</p>
        <p>
          Trung tâm Dữ liệu quốc gia và Dịch vụ về giá.
        </p>
        <p>
          Điện thoại: (84-4)2220.2828 | Fax: (84-4)2220.8091 | Email:
          <a href="mailto:csdlgiaquocgia@mof.gov.vn">
            csdlgiaquocgia@mof.gov.vn
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;