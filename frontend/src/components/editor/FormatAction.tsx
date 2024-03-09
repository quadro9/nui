import TooltipWrapCmp from "@/components/TooltipWrapCmp"
import Button from "@/components/buttons/Button"
import IconButton from "@/components/buttons/IconButton"
import CopyIcon from "@/icons/CopyIcon"
import FormatIcon from "@/icons/FormatIcon"
import { EditorStore } from "@/stores/stacks/editorBase"
import { useStore } from "@priolo/jon"
import { FunctionComponent } from "react"



interface Props {
	store?: EditorStore
}

const FormatAction: FunctionComponent<Props> = ({
	store,
}) => {

	// STORE
	const storeSa = useStore(store)

	// HOOKs

	// HANDLER
	const handleOpenDialogFormats = () => store.setFormatsOpen(true)
	const handleCopy = () => navigator.clipboard.writeText(store.getEditorText())
	const handleFormat = () => storeSa.editorRef.format()


	// RENDER
	const formatLabel = storeSa.format?.toUpperCase() ?? ""
	const variant = storeSa.colorVar

	return <>
		<TooltipWrapCmp content="COPY" variant={variant}>
			<IconButton
				onClick={handleCopy}
				variant={variant}
			><CopyIcon /></IconButton>
		</TooltipWrapCmp>
		<TooltipWrapCmp content="FORMAT" variant={variant}>
			<IconButton
				onClick={handleFormat}
				variant={variant}
			><FormatIcon /></IconButton>
		</TooltipWrapCmp>
		<Button
			select={storeSa.formatsOpen}
			children={formatLabel}
			onClick={handleOpenDialogFormats}
			variant={variant}
		/>
	</>
}

export default FormatAction