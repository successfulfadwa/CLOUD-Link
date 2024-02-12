const Contact: React.FC = () => {
	return (
		<div className="container mx-auto">
			<div className="flex justify-start">
				<form className="max-w-md p-8 rounded-lg pt-28 text-lg" style={{ textAlign: 'left' }}>

					<div className="mb-4 w-80">
						<label htmlFor="fullName" className="block text-white pb-3">Full Name</label>
						<input type="text" id="fullName" name="fullName" placeholder="Full name" className="border border-white bg-transparent p-2 w-full rounded-md" />
					</div>

					<div className="mb-4 w-80">
						<label htmlFor="email" className="block text-white  pb-3">Email</label>
						<input type="email" id="email" name="email" placeholder="Johnmayer@gmail.com" className="border border-white bg-transparent p-2 w-full rounded-md" />
					</div>

					<div className="mb-4 w-[800px]">
						<label htmlFor="message" className="block text-white  pb-3">Message</label>
						<textarea id="message" name="message" placeholder="......" rows={4} className="border  h-[203px] border-white bg-transparent p-2 w-full rounded-md"></textarea>
					</div>

					<div
						className="flex  w-[800px] justify-end">

						<button type="submit" style={{ backgroundColor: "#2E8544" }} className=" text-white text-center py-2 px-4  rounded-md hover:bg-gray-400 transition-colors duration-300">Save</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
