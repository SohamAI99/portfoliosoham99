export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© {currentYear} Soham Lamb. All rights reserved.</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              Built with <span className="text-primary">Next.js</span> and{" "}
              <span className="text-secondary">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

