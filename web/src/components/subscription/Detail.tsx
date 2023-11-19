import { Subscription } from "@/types"
import { FunctionComponent } from "react"
import { RenderDetailBaseProps } from "../stacks/dialogs/ListEditDlg"



const SubDetail: FunctionComponent<RenderDetailBaseProps<Subscription>> = ({
	item,
	onChange,
}) => {

	// HANDLERS
	const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
		const subject = e.target.value
		const newItem = { ...item, subject }
		onChange?.(newItem)
	}

	// RENDER
	const subject = item.subject

	return <input
		value={subject}
		onChange={handleChangeSubject}
	/>
}

export default SubDetail