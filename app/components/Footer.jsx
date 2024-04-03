import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2024{" "}
            <Link
              href="https://github.com/jumbopere"
              className="hover:text-gray-300"
            >
              Pere Jumbo
            </Link>
            . All rights reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer