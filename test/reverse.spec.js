import reverse from '../src/js/reverse';

test('should reverse the provided string', () => {
    expect(reverse('test')).toBe('tset');
});