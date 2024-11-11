import './styles.scss';

const LIST_FOOTER = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
];

const FooterPage = () => {
  return (
    <footer className="footer-page">
      <div className="footer-page__box">
        {LIST_FOOTER.map(e => (
          <p key={e}>{e}</p>
        ))}
      </div>
    </footer>
  );
};

export default FooterPage;
