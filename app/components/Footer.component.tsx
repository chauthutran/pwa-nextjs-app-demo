export default function Footer() {

    return (
        // <footer>
        //     <div className="text-center justify-between px-8 py-2 bg-green-300 text-gray-600" style={{fontSize: "12px"}}>
        //        &copy;Company ABC - All rights reserved - Version 1.0 snapshot 1.0
        //     </div>
        // </footer>

        <footer className="bg-softPastel-lavender text-gray-800 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <p>&copy; Company ABC - All rights reserved - Version 1.0 snapshot 1.0</p>
              </div>
              <div className="flex space-x-4">
                {/* <a href="#" className="text-gray-800 hover:text-softPastel-lightPink">
                  <i className="fab fa-facebook-f"></i>
                </a> */}
              </div>
            </div>
          </div>
        </footer>
        

    )
}