import { FC } from "react"
import { CouchDBSubPanelProps } from "@/page/App/components/Actions/ActionPanel/CouchDBPanel/interface"
import { DeleteRecordInfo } from "@/page/App/components/Actions/ActionPanel/CouchDBPanel/values"
import { InputEditor } from "@/page/App/components/InputEditor"
import { DeleteRecord } from "@/redux/currentApp/action/couchDBAction"

export const DeleteRecordSubPanel: FC<CouchDBSubPanelProps> = (props) => {
  const { onInputValueChange } = props
  const opts = props.opts as DeleteRecord

  return (
    <>
      {DeleteRecordInfo.map((info) => {
        const { title, name, expectedType, lineNumbers, style = {} } = info
        const value = opts[name[1] as keyof DeleteRecord]
        return (
          <InputEditor
            key={name.join("-")}
            title={title}
            expectedType={expectedType}
            value={value as string}
            onChange={onInputValueChange(name)}
            lineNumbers={!!lineNumbers}
            style={style}
          />
        )
      })}
    </>
  )
}
DeleteRecordSubPanel.displayName = "DeleteRecordSubPanel"