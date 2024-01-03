'use client'

export default function Sensitive({close}: {close: () => void}) {
  return (
    <label className="form-control w-full">
        <div className="label">
            <span className="label-text font-medium">Sensitive content</span>
        </div>
        <input type="text" placeholder="Write your warning here (optional)" className="input input-bordered w-full" />
        <div className="text-center py-2">
            <h1 className="btn btn-ghost btn-sm text-error" onClick={close}>Remove sensitive</h1>
        </div>
    </label>
  )
}
