import React, { FC, MouseEventHandler } from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	message: string
	classCss: string
	icon: FC<{ className: string }>
	action: MouseEventHandler<HTMLButtonElement>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ action, message, icon: Icon, classCss, isLoading, ...props }, ref) => {
		return (
			<button
				type="button"
				onClick={action}
				className={classCss}
				disabled={isLoading}
				{...props}
				ref={ref}
			>
				<Icon className="text-red-400" />
				<span>{message}</span>
			</button>
		)
	}
)
Button.displayName = 'Button'

export { Button }
