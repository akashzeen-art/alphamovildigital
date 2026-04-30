export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-foreground">Copyright © Alphamovil {currentYear}</p>
      </div>
    </footer>
  );
}
