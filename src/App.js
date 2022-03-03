import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addUser, deleteUser, updateName } from "redux/Users"

const App = () => {
	const [name, setName] = useState("")
	const [nationality, setNationality] = useState("")
	const [university, setUniversity] = useState("")
	const [position, setPosition] = useState("")
	const [newName, setNewName] = useState("")

	const dispatch = useDispatch()
	const usersList = useSelector((state) => state.users.value)

	const SendData = (event) => {
		event.preventDefault()
	}

	return (
		<div className="m-5">
			<h1 className="font-bold text-3xl">Hello React and Redux</h1>
			<p className="text-xs text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere.</p>
			<div className="flex">
				<form onSubmit={SendData} className="max-w-sm mt-6 mb-8 rounded-lg border border-gray-300 py-8 px-10">
					{/* <!-- Name Field --> */}
					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name <span className="text-red-600">*</span></label>
						<input type="text" required id="name" value={name} name="name" onChange={event => setName(event.target.value)} placeholder="Enter Name" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
					</div>

					{/* <!-- Nationality --> */}
					<div className="mb-4">
						<label htmlFor="nationality" className="block text-gray-700 text-sm font-medium mb-2">Nationality <span className="text-red-600">*</span></label>
						<input type="text" required id="nationality" value={nationality} name="nationality" onChange={event => setNationality(event.target.value)} placeholder="Enter Nationality" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
					</div>

					{/* <!-- University--> */}
					<div className="mb-4">
						<label htmlFor="university" className="block text-gray-700 text-sm font-medium mb-2">University <span className="text-red-600">*</span></label>
						<input type="text" required id="university" value={university} name="university" onChange={event => setUniversity(event.target.value)} placeholder="Enter University" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
					</div>

					{/* <!-- Position--> */}
					<div className="mb-4">
						<label htmlFor="position" className="block text-gray-700 text-sm font-medium mb-2">Position <span className="text-red-600">*</span></label>
						<input type="text" required id="position" value={position} name="position" onChange={event => setPosition(event.target.value)} placeholder="Enter Position" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
					</div>

					{/* <!-- Submit Button --> */}
					<button onClick={() => {
						dispatch(addUser({
							id: usersList[usersList.length - 1].id + 1, name, nationality, university, position
						}))
					}} type="submit" className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-4 py-2 leading-none bg-blue-700 border-blue-700 border rounded text-white hover:border-transparent hover:bg-blue-900 mt-4 sm:mt-0">
						<p className="text-lg font-medium">Create User</p>
					</button>
				</form>
				<div className="usersList ml-10">
					<div className="grid grid-cols-3 gap-4">
						{usersList.map((users) => (
							<div key={users.id} className="p-2 border border-gray-400 rounded-md">
								<h1 className="font-bold text-md mb-2 text-gray-800">{users.name}</h1>
								<p className="text-xs text-gray-600 pb-1">{users.university}</p>
								{/* Update Name */}
								<div className="mt-2">
									<input type="text" required id="newName" name="newName" onChange={event => setNewName(event.target.value)} placeholder="New Name" className="text-xs appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
								</div>
								<div className="flex items-center justify-between gap-x-2">
									<button onClick={() => {
										dispatch(updateName({ id: users.id, name: newName }))
									}} className="py-2 px-4 rounded-md bg-blue-700 hover:bg-blue-800 text-xs mt-2 text-white w-full">Update</button>
									<button onClick={() => {
										dispatch(deleteUser({ id: users.id }))
									}} className="py-2 px-4 rounded-md bg-red-700 hover:bg-red-800 text-xs mt-2 text-white w-full">Delete</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div >
	)
}

export default App