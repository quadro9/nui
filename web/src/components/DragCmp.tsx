import mouseSo, { MouseState } from "@/stores/mouse"
import { useStore } from "@priolo/jon"
import { FunctionComponent, useEffect, useState } from "react"
import { ANIM_TIME } from "../types"
import { Position } from "../stores/mouse/utils"
import layoutSo from "@/stores/layout"



const DragCmp: FunctionComponent = () => {

	// STORES
	const mouseSa = useStore(mouseSo) as MouseState

	// HOOKS
	const [hide, setHide] = useState(true)
	const inShow = mouseSa.drag != null
	useEffect(() => {
		if (inShow == false) {
			setTimeout(() => setHide(true), ANIM_TIME)
		} else {
			setHide(false)
		}
	}, [inShow])

	// HANDLERS

	// RENDER
	const styRoot: React.CSSProperties = {
		...cssRoot,
		...cssPosition(mouseSa.position),
		...(inShow ? cssInShow : cssInHide),
		...(hide ? { visibility: "hidden" } : {})
	}

	return <div style={styRoot}>
		{mouseSa.drag?.srcView?.getTitle() ?? "???"}
	</div>
}

export default DragCmp

const cssRoot: React.CSSProperties = {
	pointerEvents: "none",
	position: 'absolute',
	zIndex: 99999,
	transition: 'opacity 1s',

	fontSize: 14,
	fontWeight: 700,

	padding: "3px 8px",
	backgroundColor: layoutSo.state.theme.palette.var[0].bg,
	color: layoutSo.state.theme.palette.var[0].fg,
	borderRadius: 10,
	boxShadow: layoutSo.state.theme.shadows[0],

	transform: "translate(-50%, -30px)",
}

const cssPosition = (pos: Position): React.CSSProperties => ({
	left: pos?.x,
	top: pos?.y,
})

const cssInShow = {
	opacity: 1,
}
const cssInHide = {
	opacity: 0,
}