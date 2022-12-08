import "./footer.css"

const Footer = () => {
  return (
    <section className="footer">
      <div className="img-footer">
        <div>
          <img src="/imagens/fb.png" className="img-socialMedias" alt="Facebook" />
          <img src="/imagens/tw.png" className="img-socialMedias" alt="Twitter" />
          <img src="/imagens/ig.png" className="img-socialMedias" alt="Instagram" />
        </div>
        <div>
          <img src="/imagens/logo.png" className="img-organo" alt="Logo Organo"/>
        </div>
        <div>
          <p className="text-footer">Desenvolvido por Julio Pampuch</p>
        </div>
      </div>
    </section>
  )
}

export default Footer