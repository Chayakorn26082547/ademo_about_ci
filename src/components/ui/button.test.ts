import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import Button from './Button.vue';

describe('Button Component', () => {
    it('renders correctly', () => {
        render(Button, { props: { label: 'Click Me' } });
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('emits an event when clicked', async () => {
        const { emitted } = render(Button, { props: { label: 'Click Me' } });
        const button = screen.getByText('Click Me');
        await button.click();
        expect(emitted().click).toBeTruthy();
    });
});