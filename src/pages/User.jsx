import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContex'
import { useParams } from 'react-router-dom'
import { FaUsers, FaUserFriends, FaCode } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Loader from '../components/layout/Loader'

const User = () => {
	const params = useParams()

	const { getUser, user, loading } = useContext(GithubContext)

	useEffect(() => {
		getUser(params.login)
		// eslint-disable-next-line
	}, [])

	const {
		name,
		avatar_url,
		location,
		type,
		bio,
		blog,
		login,
		html_url,
		twitter_username,
		followers,
		following,
		public_repos,
		hireable,
	} = user

	if (loading) {
		return <Loader />
	}
	return (
		<>
			<div className='w-full mx-auto lg:w-10/12'>
				<div className='mb-4'>
					<Link to='/' className='btn btn-ghost'>
						Back to the search results
					</Link>
				</div>
				<div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
					<div className='custom-card-image mb-6 md:mb-0'>
						<div className='rounded-lg drop-shadow-md card image-full'>
							<figure>
								<img src={avatar_url} alt='name' />
							</figure>
						</div>
					</div>

					<div className='col-span-2'>
						<div className='mb-6'>
							<h1 className='text-lg card-title'>
								{name} / {login}
								<div className='badge badge-warning ml-2 mr-1'>{type}</div>
								{hireable && (
									<div className='mx-1 badge badge-warning'>hireable</div>
								)}
							</h1>
							<p>{bio}</p>
							<div className='mt-4 card-actions'>
								<a
									href={html_url}
									target='_blank'
									rel='noreferrer'
									className='btn btn-outline'
								>
									Visit Github Profile
								</a>
							</div>
						</div>

						<div className='w-full rounded-lg drop-shadow-md bg-base-100 stats'>
							{location && (
								<div className='stat'>
									<div className='stat-title text-md'>Location</div>
									<div className='text-lg stat-value'>{location}</div>
								</div>
							)}
							{blog && (
								<div className='stat'>
									<div className='stat-title text-md'>Website</div>
									<div className='text-lg stat-value'>
										<a
											href={`https://${blog}`}
											target='_blank'
											rel='noreferrer'
										>
											{blog}
										</a>
									</div>
								</div>
							)}
							{twitter_username && (
								<div className='stat'>
									<div className='stat-title text-md'>Twitter</div>
									<div className='text-lg stat-value'>
										<a
											href={`https://twitter.com/${twitter_username}`}
											target='_blank'
											rel='noreferrer'
										>
											{twitter_username}
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className='w-full py-5 mb-6 rounded-lg drop-shadow-md bg-base-100 stats'>
					<div className='stat'>
						<div className='stat-figure text-accent'>
							<FaUsers className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-5'>Followers</div>
						<div className='stat-value pr-5 text-3xl md:text-4xl'>
							{followers}
						</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-accent'>
							<FaUserFriends className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-5'>Following</div>
						<div className='stat-value pr-5 text-3xl md:text-4xl'>
							{following}
						</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-accent'>
							<FaCode className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-5'>Public Repos</div>
						<div className='stat-value pr-5 text-3xl md:text-4xl'>
							{public_repos}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default User
