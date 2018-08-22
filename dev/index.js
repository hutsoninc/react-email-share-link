import EmailShare from '../dist'
import React from 'react'
import { render } from 'react-dom'

render(
    <div>
        <EmailShare subject="Test Subject" body="Message">
            {link => (
                <a href={link} data-rel="external">Share this by email</a>
            )}
        </EmailShare>
    </div>,
    document.getElementById('root')
)