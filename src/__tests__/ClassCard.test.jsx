import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassCard from '../Components/ClassCard/ClassCard';

describe('ClassCard Component', () => {
  const props = {
    image: "path/to/image.jpg",
    subject: "Math",
    grade: "Grade 10",
    teacher: "Mr. Smith",
    medium: "English",
    enrolls: "30",
    fee: "$100"
  };

  it('renders correctly with given props', () => {
    render(<ClassCard {...props} />);
    expect(screen.getByAltText("")).toHaveAttribute('src', props.image);
    expect(screen.getByText(props.subject)).toBeInTheDocument();
    expect(screen.getByText(props.grade)).toBeInTheDocument();
    expect(screen.getByText(props.teacher)).toBeInTheDocument();
    expect(screen.getByText(props.medium)).toBeInTheDocument();
    expect(screen.getByText(props.enrolls)).toBeInTheDocument();
    expect(screen.getByText(props.fee)).toBeInTheDocument();
    expect(screen.getByText("Published")).toBeInTheDocument();
    expect(screen.getByText("Add to visit list")).toBeInTheDocument();
    expect(screen.getByText("Request admission")).toBeInTheDocument();
  });
});

it('renders all prop values correctly', () => {
  const { getByText, getByAltText } = render(
    <ClassCard
      image="test-image.jpg"
      subject="Math"
      grade="Grade 10"
      teacher="Mr. Doe"
      medium="English"
      enrolls="20"
      fee="$100"
    />
  );
  expect(getByAltText("")).toHaveAttribute('src', 'test-image.jpg');
  expect(getByText('Math')).toBeInTheDocument();
  expect(getByText('Grade 10')).toBeInTheDocument();
  expect(getByText('Mr. Doe')).toBeInTheDocument();
  expect(getByText('English')).toBeInTheDocument();
  expect(getByText('20')).toBeInTheDocument();
  expect(getByText('$100')).toBeInTheDocument();
});

it('displays the action buttons correctly', () => {
  const { getByText } = render(
    <ClassCard
      image=""
      subject=""
      grade=""
      teacher=""
      medium=""
      enrolls=""
      fee=""
    />
  );
  expect(getByText('Add to visit list')).toBeVisible();
  expect(getByText('Request admission')).toBeVisible();
});
