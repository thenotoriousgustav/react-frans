import Day from '../components/day';
import '../styles/home.css';

export default function Home() {
  return (
    <section className='home-container'>
      <div className='home-wrapper'>
        <div className='heading'>
          <h2>Things To Buy!</h2>
        </div>
        <div className='wrapper-home'>
          <Day>Monday</Day>
          <Day style={{ backgroundColor: 'yellow' }}>Tuesday</Day>
          <Day>Wednesday</Day>
          <Day>Thursday</Day>
        </div>
      </div>
    </section>
  );
}
