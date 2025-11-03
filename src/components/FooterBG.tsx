interface FooterBGProps {
  classname?: string;
}

function FooterBG({ classname = "" }: FooterBGProps) {
  return (
    <footer className={`py-16 px-4 border-white/10 ${classname}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-auto h-auto flex items-center justify-center"></div>
          </div>
          <p className="text-white/40 text-sm">
            © VASPP 2025 • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterBG;
