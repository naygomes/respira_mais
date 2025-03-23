const getButtonClasses = (type: 'solid' | 'outline' | 'text') => {
  switch (type) {
    case 'solid':
      return 'bg-primary text-white hover:bg-secondary hover:text-white border-none rounded-xl';
    case 'outline':
      return 'border-2 rounded-xl border-primary text-primary hover:bg-primary hover:text-white';
    case 'text':
      return 'text-primary hover:text-secondary border-none bg-transparent';
    default:
      return '';
  }
};

export default getButtonClasses;
